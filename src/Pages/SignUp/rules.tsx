export const rules = {
  username: {
    required: {
      value: true,
      message: "必填"
    },
  },
  email: {
    required: {
      value: true, message: "必填"
    },
    pattern: {
      value: /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/,
      message: "格式不符"
    }
  },
  password: {
    required: {
      value: true,
      message: "必填"
    },
    minLength: {
      value: 6,
      message: "密碼不得低於 6 個字元"
    }
  },
  compare: {
    required: {
      value: true,
      message: "必填"
    },
  }
}