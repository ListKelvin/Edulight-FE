type IPortfolioDetailProps = {
  params: { slug: string };
};

// export async function generateStaticParams() {
//   const users = await fetch(Env.NEXT_PUBLIC_MOCK_API).then((res) => res.json());

//   return users.map((user) => ({
//     slug: user.id,
//   }));
// }

const AbcDetail = (props: IPortfolioDetailProps) => {
  return <h1 className="capitalize">{props.params.slug}</h1>;
};

export default AbcDetail;
