'use client';

import dayjs from 'dayjs';

const useDateTime = () => {
  const localDate = dayjs();

  const currentHour = localDate.get('hour');
  const day = localDate.get('day');
  const dayOfWeek = (day === 0 ? 7 : day) - 1;
  const currentYear = localDate.get('year');

  return { currentHour, dayOfWeek, currentYear };
};

export default useDateTime;
