// Timer.jsx
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTimer = () => {
      // Получаем текущее время
      const currentTime = new Date();

      // Создаем объект времени для 18:00:00 сегодня
      const targetTime = new Date(currentTime);
      targetTime.setHours(18, 0, 0, 0);

      // Если текущее время больше или равно 18:00:00, то устанавливаем цель на завтрашний 18:00:00
      if (currentTime >= targetTime) {
        targetTime.setDate(targetTime.getDate() + 1);
      }

      // Вычисляем оставшееся время
      const remainingTime = new Date(targetTime - currentTime);

      setTime(remainingTime);
    };

    // Вызываем функцию обновления таймера сразу и устанавливаем интервал для обновления каждую секунду
    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(interval);
  }, []);

  const hours = time.getUTCHours();
  const minutes = time.getUTCMinutes();
  const seconds = time.getUTCSeconds();

  return (
    <div className="text-wrapper-4">
      {hours.toString().padStart(2, '0')}:
      {minutes.toString().padStart(2, '0')}:
      {seconds.toString().padStart(2, '0')}
    </div>
  );
};

export default Timer;
