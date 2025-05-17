export const calculateLateInterest = (
  outstandingBalance: number,
  porcInteresCobranza: number,
  dueDate: Date
) => {
  // Define the annual interest rate
  const annualInterestRate = porcInteresCobranza;
  
  // Si no hay tasa de interés anual, no se genera interés
  if (annualInterestRate <= 0) {
      return {
          success: true,
          daysLate: 0,
          dailyInterestAmount: 0,
          totalLateInterest: 0,
          totalDebtWithInterest: outstandingBalance,
      };
  }

  const dailyInterestRate = annualInterestRate / 365; // Convert to daily rate

  // Calculate the number of days late
  const currentDate = new Date();
  const daysLate = Math.max(
      0,
      Math.ceil(
          (currentDate.getTime() - new Date(dueDate).getTime()) /
          (1000 * 60 * 60 * 24)
      )
  );

  // Calculate the late interest amount
  const dailyInterestAmount = outstandingBalance * dailyInterestRate;
  const totalLateInterest = dailyInterestAmount * daysLate;
  const totalDebtWithInterest = outstandingBalance + totalLateInterest;

  return {
      success: true,
      daysLate,
      dailyInterestAmount,
      totalLateInterest,
      totalDebtWithInterest,
  };
};
