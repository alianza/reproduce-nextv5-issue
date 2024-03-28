export async function getServerSideProps(context) {
  const profile = {
    preferred_stance: "regular",
    id: 12345,
  };

  return {
    props: {
      profile,
    },
  };
}

const ProfilePage = ({ profile }) => {
  return <div>{JSON.stringify(profile)}</div>;
};

export default ProfilePage;
