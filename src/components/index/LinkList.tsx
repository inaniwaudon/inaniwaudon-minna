import styled from 'styled-components';
import { links } from '@/const/index';

const Wrapper = styled.section``;

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

const LinkContent = styled.div`
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

const LinkList = () => {
  return (
    <Wrapper>
      <h2>外部リンク</h2>
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
    </Wrapper>
  );
};

export default LinkList;
