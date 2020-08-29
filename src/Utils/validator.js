export function getEmailRegExp() {
  return /^\S+@\S+\.\S+$/i
}

export function isEmail(str) {
  const re = getEmailRegExp()
  return re.test(str)
}

export function validatePassword(password) {
  const maxLength =
    password.length > 15
      ? '(* Mật khẩu không được dài quá 15 kí tự)'
      : ''
  const minLength =
    password.length < 8
      ? '(* Mật khẩu cần ít nhất 8 kí tự)'
      : ''

  return maxLength ? maxLength : minLength
}

export function isPhoneNumber(str) {
  if (str.length < 10 || str.length > 11) {
    return false
  }
  const newStr = `+84${str.slice(1, str.length)}`
  return /^\+[1-9]\d{1,14}$/i.test(newStr) // E.164
}