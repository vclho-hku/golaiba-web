export default function checkEmailFormat(email: string) {
  const includedAt = email.includes('@');
  if (!includedAt) {
    return true;
  }
  const emailArray = email.split('@');
  if (emailArray.length !== 2) {
    return true;
  }
  const emailDomain = emailArray[1].split('.');
  if (emailDomain.length < 2 || emailDomain[1].length < 1) {
    return true;
  }
  return false;
}
