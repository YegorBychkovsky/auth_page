import React from "react";
import { useFormik } from "formik";
import Input from "../../UI/Input/Input";
import styles from "./styles.module.scss";
import { ReactComponent as LockPassIcon } from "../../assets/icons/lock-password.svg";
import { ReactComponent as UserVerificationIcon } from "../../assets/icons/user-id-verification.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user-solid-rounded.svg";
import { ReactComponent as MailIcon } from "../../assets/icons/mail.svg";
import CheckBox from "../../UI/CheckBox/CheckBox";
import Button from "../../UI/Button/Button";
import { initialValues } from "./config";

function Form(props) {
  const formik = useFormik({
    validationSchema: null,
    initialValues: { ...initialValues },
    enableReinitialize: true,

    onSubmit: async (values) => {
      console.log("Submit: ", values);
    },
  });
  const { values, touched } = formik;

  const handleFormikChange = (e) => {
    const { name } = e.target;

    if (!touched[name]) {
      formik.setFieldTouched(name, true);
    }

    formik.handleChange(e);
  };

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <div className={styles.formWrapper}>
        <Input
          value={values.userId}
          name="userId"
          label="User Id"
          Icon={UserVerificationIcon}
          onChange={handleFormikChange}
        />
        <Input
          value={values.password}
          name="password"
          label="Password"
          Icon={LockPassIcon}
          validation="8 characters minimum"
          onChange={handleFormikChange}
        />
        <Input
          value={values.accountName}
          name="accountName"
          label="Account Name"
          Icon={UserIcon}
          validation="Visible nickname for your profile"
          onChange={handleFormikChange}
        />
        <Input
          value={values.email}
          name="email"
          label="Email"
          Icon={MailIcon}
          onChange={handleFormikChange}
          initialTimer={60}
        />
        <Input
          value={values.verificationCode}
          name="verificationCode"
          label="Verification Code"
          Icon={MailIcon}
          onChange={handleFormikChange}
        />
      </div>
      <div className={styles.agreementBlock}>
        <CheckBox type="checkbox" name="termsOfService">
          <p>
            I read the <a href={"/terms"}>Terms of Service</a> and I agree to
            the terms
          </p>
        </CheckBox>
        <CheckBox type="checkbox" name="privacyPolicy">
          <p>
            I read the <a href={"/privacy"}>Privacy Policy</a> and I agree to
            the terms
          </p>
        </CheckBox>
        <CheckBox type="checkbox" name="promotionalEmails">
          <p>I would like to receive promotional emails</p>
        </CheckBox>
      </div>
      <Button type="submit" theme={"red"}>
        Create Account
      </Button>
    </form>
  );
}

export default Form;
