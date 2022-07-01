import RegisterForm from '../RegisterForm';

Register.propTypes = {
  
};

function Register(props) {
  const handleSubmit = (values) => {
    console.log('Form value :', values);
    // alert('Chúc Thao một ngày vui vẻ <3')
    // alert('Đăng nhập thành công!')
    // alert('Hẹn gặp lại bạn Thao nè :)))')
  }

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;