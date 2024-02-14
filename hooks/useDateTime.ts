'use client';

import dayjs from 'dayjs';

const useDateTime = () => {
  const localDate = dayjs();

  const currentHour = localDate.get('hour');
  const dayOfWeek = localDate.get('day') - 1;
  const currentYear = localDate.get('year');

  return { currentHour, dayOfWeek, currentYear };
};

export default useDateTime;
