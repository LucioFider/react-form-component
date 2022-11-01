import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

const Success = () => {
  const [pieces, setPieces] = useState(200);

  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 3000);
  };

  useEffect(() => {
    stopConfetti();
  }, []);

  const router = useRouter();
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen flex items-center justify-center bg-teal-500"
    >
      <div className="bg-white rounded-lg w-1/2 text-gray-700 p-16">
        <h1 className="text-3xl pb-4">
          Thanks for the email {router.query.name}
        </h1>
        <p className="text-lg text-gray-500">
          We have sent you an email over at {router.query.email}. We will get
          back to you as soon as we can.
        </p>
      </div>
      <Confetti gravity={0.2} numberOfPieces={pieces} />
    </motion.main>
  );
};

export default Success;
