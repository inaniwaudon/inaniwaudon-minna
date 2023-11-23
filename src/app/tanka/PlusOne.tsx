'use client';

import { maxReactionCount } from '@/const/tanka';
import { useCallback, useState } from 'react';

import { TankaReactionPOSTResult, TankaReactionPOSTSchema } from '@/app/api/tanka/reaction/route';

interface PlusOneProps {
  tankaId: number;
  initialCount: number;
}

const PlusOne = ({ tankaId, initialCount }: PlusOneProps) => {
  const [count, setCount] = useState(initialCount);

  const onClick = useCallback(async () => {
    const body: TankaReactionPOSTSchema = {
      tanka_id: tankaId,
      reaction: 'plusone',
    };
    const response = await fetch('/api/tanka/reaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      alert('じゃあ反応できてないじゃん残念でした');
      return;
    }

    const result: TankaReactionPOSTResult = await response.json();
    if (!result.executed) {
      alert(`${maxReactionCount} 回以上のリアクションはできません`);
      return;
    }
    setCount((value) => value + 1);
  }, [tankaId]);

  return <div onClick={onClick}>+{initialCount}</div>;
};

export default PlusOne;
