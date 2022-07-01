import { yupResolver } from '@hookform/resolvers/yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import InputField from '../../../../components/form-control/InputField'
import PasswordField from '../../../../components/form-control/PasswordField'
import SelecField from '../../../../components/form-control/SelectField'
import * as yup from "yup";
import './styles.scss';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func
};

function RegisterForm(props) {
  const { onSubmit } = props

  const schema = yup.object({
    fullName: yup.string().required('Vui lòng nhập đúng yêu cầu'),
      // .test('Nhập đúng','Gợi ý: "Nguyễn Thị Thao"', (value) => {
      //   return value === '123'
      // }),
    email: yup.string().required('Vui lòng nhập email')
      .email('Nhập đúng định dạng! Vd: nguyenkimkhoi2709@gmail.com')
  }).required();

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      title: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema)
  })

  const handleSubmit = (values) => {
    if(onSubmit) {
      onSubmit(values)
    }
    form.reset()
  }

  return (
    <div className="root">
      <Avatar className="avatar">
        <LockOutlinedIcon />
      </Avatar>

      <Typography className="title" component="h3" variant="h5">
        
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Họ và tên" form={form} />
        <InputField name="email" label="Email" form={form} />
        <SelecField name="title" label="Mô tả" form={form} />
        <PasswordField name="password" label="Mật khẩu" form={form} />
        <PasswordField name="retypePassword" label="Nhập lại mật khẩu" form={form} />

        <Button type="submit" variant="contained" color="primary" className="submit">
          Đăng nhập
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;