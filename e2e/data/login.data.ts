interface LoginCredentials {
  username?: string;
  password?: string;
  expected: 'success' | 'fail';
  message?: string;
}


export const loginData: LoginCredentials[] = [
  // HAPPY CASE
  {
    username: 'tun',
    password: 'admin',
    expected: 'success'
  },

  // VALIDATION
  {
    username: '',
    password: '',
    expected: 'fail',
    message: 'Please fill out Username and Password.'
  },
  {
    username: '',
    password: 'admin',
    expected: 'fail',
    message: 'Please fill out Username and Password.'
  },
  {
    username: 'tun',
    password: '',
    expected: 'fail',
    message: 'Please fill out Username and Password.'
  },

  // BUSINESS LOGIC
  {
    username: 'sdhf1@434',
    password: 'admin',
    expected: 'fail',
    message: 'User does not exist.'
  },
  {
    username: 'tun',
    password: 'wrong',
    expected: 'fail',
    message: 'Wrong password.'
  }
];