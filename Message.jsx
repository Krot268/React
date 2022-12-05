import styles from './Message.module.css';
import App from '../App';

export function Message(props) {
  console.log('props', props);
  return (
    <h1>{props.title}</h1>
  )
}