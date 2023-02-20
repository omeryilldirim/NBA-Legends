import FormStyle from "./form.module.scss"

const Form = () => {
  return (
    <div className={FormStyle.formContainer}>
        <form action="">
            <input type="search" name="" id="" placeholder="Search player..." />
        </form>
    </div>
  )
}

export default Form