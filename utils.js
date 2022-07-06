export const mapCodeToAuth = (authCode) => {
  switch (authCode) {
    case 'auth/invalid-password':
      return 'Password is not corrected. Try Again'
  }
}
