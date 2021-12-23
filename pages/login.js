import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div className="flex items-center justify-center">
      <img src="https://links.papareact.com/9xl" alt="" className="w-52 mb-5" />
      {Object.values(providers).map((provider) => (
        <div>
          <button onClick={signIn}>Login with {provider.name}</button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  console.log("providers", providers);

  return {
    props: {
      providers,
    },
  };
}
