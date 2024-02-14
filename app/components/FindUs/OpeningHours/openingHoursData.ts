export interface IOpeningHoursData {
  dayName: string;
  openingHours: string;
}

export const openingHoursData: IOpeningHoursData[] = [
  { dayName: 'Pondělí', openingHours: '11:00-22:00' },
  { dayName: 'Úterý', openingHours: '11:00-22:00' },
  { dayName: 'Středa', openingHours: '11:00-22:00' },
  { dayName: 'Čtvrtek', openingHours: '11:00-22:00' },
  { dayName: 'Pátek', openingHours: '11:00-22:00' },
  { dayName: 'Sobota', openingHours: '11:00-22:00' },
  { dayName: 'Neděle', openingHours: '11:00-22:00' },
];
