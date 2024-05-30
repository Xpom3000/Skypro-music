import { durationFormat } from "./utilits";

describe('Функция форатирует время', () => {
    it('Правильно форматирует число в строку', () => {
        const result = durationFormat(6);
        expect(result).toBe("0:06")
    });
    it('Правильно форматирует 0 в строку', () => {
        const result = durationFormat(0);
        expect(result).toBe("0:00")
    });
  });