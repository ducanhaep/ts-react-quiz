type Props = {
  question: string;
  answer: [];
  callback: any;
  userAnswer: string;
  questionNr: number;
  totalQuestions: number;
};
const QuestionCard: React.FC<Props> = ({
  question,
  answer,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <div>
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
    </div>
  );
};

export default QuestionCard;
