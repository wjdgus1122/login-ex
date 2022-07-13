import { useForm } from "react-hook-form";
import styled from "styled-components";

const userDb = {
  dbUsername: "test",
  dbPw: "123123123a",
};

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  border: 1px solid #dbdbdb;
  align-items: center;
  padding: 80px 50px;
  border-radius: 10px;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    input {
      all: unset;
      border-radius: 10px;
      border: 1px solid #dbdbdb;
      padding: 10px;
      margin-bottom: 15px;
    }
  }
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 30px;
`;
const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  padding: 10px;
  text-align: center;
  background-color: orangered;
  box-sizing: border-box;
  color: white;
  border-radius: 10px;
  opacity: ${(props) => props.opacity};
  cursor: ${(props) => props.cursor};
`;
const ErrorMessage = styled.span`
  font-weight: 900;
  color: crimson;
  margin-bottom: 15px;
`;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setError,
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = () => {
    const { username, password } = getValues();
    const { dbUsername, dbPw } = userDb;

    if (username != dbUsername) {
      setError("usernameResult", { message: "아이디가 틀렸습니다." });
    }
    if (password != dbPw) {
      setError("passwordResult", { message: "패스워드가 틀렸습니다." });
    }

    if (username === dbUsername && password === dbPw) {
      alert("로그인이 되었습니다.");
    }
  };

  console.log(errors);

  return (
    <Wrap>
      <LoginWrap>
        <Title>LOGIN</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("username", {
              required: "아이디는 필수입니다.",
              minLength: {
                value: 3,
                message: "아이디는 3자리 이상 작성해주세요.",
              },
            })}
            type="text"
            placeholder="이메일이나 아이디를 입력 해주세요."
          />

          {errors?.username?.message && (
            <ErrorMessage>{errors?.username?.message}</ErrorMessage>
          )}
          {errors?.usernameResult?.message && (
            <ErrorMessage>{errors?.usernameResult?.message}</ErrorMessage>
          )}
          <input
            {...register("password", {
              required: "패스워드는 필수입니다.",
              minLength: {
                value: 8,
                message: "패스워드는 8자리 이상 작성해주세요.",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[0-9a-zA-Z]{8,16}$/,
                message:
                  "패스워드는 8자리이상 문자, 숫자 조합으로 작성하셔야 합니다.",
              },
            })}
            type="password"
            placeholder="패스워드"
          />

          {errors?.password?.message && (
            <ErrorMessage>{errors?.password?.message}</ErrorMessage>
          )}
          {errors?.passwordResult?.message && (
            <ErrorMessage>{errors?.passwordResult?.message}</ErrorMessage>
          )}
          <Button
            opacity={isValid ? 1 : 0.5}
            cursor={isValid ? "pointer" : "auto"}
          >
            로그인
          </Button>
        </form>
      </LoginWrap>
    </Wrap>
  );
};

// input 태그를 쓸때 어딘가로 정보를 보낼거면 반드시 form태그를 써야함
{
  /* <form action="" method="POST">
    <input/>
</form> */
}
// action : input 내용을 담아 특정 페이지로 보낼때(php경로)
// register : 각 input의 별칭을 정해줌, 유효성 검사(유효한지 아닌지, pw를 사용하면서 특수문자를 사용하는지 안하는지, 아이디 글자수)
