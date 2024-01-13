import { styled } from "@linaria/react";

import jikan from "@/assets/index/jikan.webp";
import H2 from "@/components/common/H2";
import { links } from "@/const/index";

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Link = styled.li`
  display: block;
`;

const IconImage = styled.img<{ scale: number }>`
  height: 20px;
  transform: scale(${({ scale }) => scale});
`;

const Platform = styled.div`
  width: 6em;
  font-weight: bold;
  font-size: 16px;
  margin-right: 20px;
  transition: margin 0.4s ease-out;
`;

const LinkContent = styled.div<{ color: string }>`
  color: #333;
  background: #fff;
  transition: padding 0.4s ease-out, background 0.4s ease-out, border-radius 0.4s ease-out;

  &:hover {
    color: #fff;
    padding: 0 16px;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: ${({ color }) => color};

    ${IconImage} {
      filter: brightness(0) invert(1);
    }

    ${Platform} {
      margin-right: 4px;
    }
  }
`;

const LinkAnchor = styled.a`
  height: 100%;
  color: inherit;
  text-decoration: none;
  padding: 8px 0;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
`;

const Description = styled.div`
  font-size: 14px;
`;

const Bunner = styled.div`
  margin-top: 16px;
`;

const LinkList = () => {
  return (
    <section>
      <H2>外部リンク</H2>
      <List>
        {links.map(({ color, name, url, platform, icon }) => (
          <Link key={url}>
            <LinkContent color={color}>
              <LinkAnchor href={url}>
                <IconWrapper>
                  <IconImage src={icon.url} scale={icon.scale} alt="" />
                </IconWrapper>
                <Platform>{platform}</Platform>
                <Description>{name}</Description>
              </LinkAnchor>
            </LinkContent>
          </Link>
        ))}
      </List>
      <Bunner>
        <a href="https://sites.google.com/view/happy-busy/" rel="nofollow">
          <img src={jikan.src} alt="時間ねぇ〜" />
        </a>
      </Bunner>
    </section>
  );
};

export default LinkList;
