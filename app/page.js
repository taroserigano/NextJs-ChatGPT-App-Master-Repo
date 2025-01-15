import Link from "next/link";

const HomePage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-primary">GPTGenius </h1>
          <p className="py-6 text-lg leading-loose">
            You can ask any question as you like and it will give you clever
            answers. You can also ask your next vacation plans and this app will
            automatically create the trip and save the plan on the Postgre SQL
            DB on the cloud.
          </p>
          <Link href="/chat" className="btn btn-secondary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
