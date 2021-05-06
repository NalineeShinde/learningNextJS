import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
        // router.go(-1)
        router.push('/')
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>OOooooooopssss..........</h1>
      <h3>The Page cannot be found</h3>
      <p>Go Back to the</p>{" "}
      <Link href="/">
        <a> HomePage</a>
      </Link>
    </div>
  );
};

export default NotFound;
