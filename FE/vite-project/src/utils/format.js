export const formatCurrency = (value, currency = 'USD') => {
  if (currency === 'VND') {
    return value.toLocaleString('vi-VN') + '₫';
  }
  return '$' + value.toLocaleString('en-US'); // Mặc định hiện tiền đô $
};
