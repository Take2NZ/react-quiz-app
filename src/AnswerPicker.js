
const AnswerPicker = ({answers, setAnswerIndex}) => {
  return (
    <ol className="list list-decimal">
    {answers.map((answer, i) => (
    <li key={i} onClick={() => setAnswerIndex(i)}>{answer}</li>
     ))}
   </ol>
  )
}

export default AnswerPicker