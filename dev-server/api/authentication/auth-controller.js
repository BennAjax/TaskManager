import * as StringUtil from '../../utilities/StringUtil';

export function login(req, res) {
  const validation = validateRegistration(req.body);
  if (!validation.isValid) {
    return res.status(400).json({ message: validation.message });
  }

  return res.status(200).json();
}

export function registration(req, res) {
  const validation = validateRegistration(req.body);
  if (!validation.isValid) {
    return res.status(400).json({ message: validation.message });
  }

  const user = {
    username: req.body.username.toLowerCase(),
    password: req.body.password
  };
  console.log(user);
  return res.status(201).json();
}

function validateRegistration(body) {
  let errors = '';
  if (StringUtil.isEmpty(body.username)) {
    errors += 'Username is Required. ';
  }
  if (StringUtil.isEmpty(body.password)) {
    errors += 'Password is Required. ';
  }
  return {
    isValid: StringUtil.isEmpty(errors),
    message: errors
  };
}
