
const InvalidCommand = (props) => {
  return (
    <div>
      <p class="text-red-500">Command "{props.command}" is not recognized.</p>
    </div>
  );
}

export default InvalidCommand;
