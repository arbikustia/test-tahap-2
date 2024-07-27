import LoadingAnimation from '@/assets/icons/loading-animated.svg';

interface loadingProps {
  styling: string;
}

const Loading = ({ styling }: loadingProps) => {
  return <img src={LoadingAnimation} alt="" className={styling} />;
};

export default Loading;
