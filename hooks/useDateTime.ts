'use client';

import dayjs from 'dayjs';

const useDateTime = () => {
  const localDate = dayjs();

  const dayOfWeek = localDate.get('day') - 1;
  const currentYear = localDate.get('year');

  return { dayOfWeek, currentYear };
};

export default useDateTime;
