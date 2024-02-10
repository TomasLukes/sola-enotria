'use client';

import dayjs from 'dayjs';

const useDateTime = () => {
  const localDate = dayjs();

  const dayOfWeek = localDate.get('day');

  return { dayOfWeek };
};

export default useDateTime;
