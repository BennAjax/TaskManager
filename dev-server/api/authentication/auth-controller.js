import * as StringUtil from '../../utilities/StringUtil';
import User from '../../model/user-model';

export function login(req, res) {
  const validation = validateLogin(req.body);
  if (!validation.isValid) {
    return res.status(400).json({ message: validation.message });
  }

  User.findOne({ username: req.body.username }, (error, user) => {
    if (error) {
      return res.status(500).json();
    }

    if (!user) {
      return res.status(401).json();
    }
    const passwordMatch = User.passwordMatches(
      req.body.password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json();
    }
    return res.status(201).json();
  });
}

export function registration(req, res) {
  const validation = validateRegistration(req.body);
  if (!validation.isValid) {
    return res.status(400).json({ message: validation.message });
  }

  const user = new User({
    username: req.body.username,
    password: req.body.password,
    first: req.body.first,
    last: req.body.last
  });

  user.save(error => {
    if (error) {
      if (error.code === 10000) {
        return res.status(403).json({ message: 'Username already taken' });
      }
      return res.status(500).json();
    }
    return res.status(201).json();
  });
}

function validateRegistration(body) {
  let errors = '';
  if (StringUtil.isEmpty(body.username)) {
    errors += 'Username is Required. ';
  }
  if (StringUtil.isEmpty(body.password)) {
    errors += 'Password is Required. ';
  }
  if (StringUtil.isEmpty(body.first)) {
    errors += 'First Name is Required. ';
  }
  if (StringUtil.isEmpty(body.last)) {
    errors += 'Last Name is Required. ';
  }
  return {
    isValid: StringUtil.isEmpty(errors),
    message: errors
  };
}

function validateLogin(body) {
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
