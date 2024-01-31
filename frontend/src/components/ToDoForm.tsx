import React from "react";

interface ToDoFormProps {
  onFinish: (description: string) => void;
}

const ToDoForm: React.FC<ToDoFormProps> = ({ onFinish }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const description = formData.get("description") as string;
    onFinish(description);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" required />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ToDoForm;
