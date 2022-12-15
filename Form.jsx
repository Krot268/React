import PropTypes from 'prop-types';
import { useState } from 'react';
import { AUTHOR } from '../../constants';
// import { Button } from '../ui/Button';
import styles from '../Form/Form.module.css';
import IButton from '@mui/material/Button';
import ITextField from '@mui/material/TextField';

export function Form({ addMessage }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addMessage({
      author: AUTHOR.user,
      text
    })

    setText('')
  }

  console.log('input', text)

  return (
    <>
      <h1 className={styles.border} >Поле ввода</h1>
      <form onSubmit={handleSubmit}>
        <ITextField
          id="outlined-basic"
          label="Введите сообщение"
          variant="outlined"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          autoFocus={true}
        />
        <br /><br /><IButton
          variant="contained"
          color="success"
          size="small"
          type="submit">
          Отправить
        </IButton>
      </form>
    </>
  )
}

Form.propTypes = {
  addMessage: PropTypes.func
}