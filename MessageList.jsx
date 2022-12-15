import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export function MessageList({ messages }) {

  return (
    <>
      {/* <h1>MessageList</h1> */}
      <ul>

      </ul>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src="/2/img/image.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Служба поддержки"
            secondary={
              <>
                {messages.map((item, index) => (
                  <li key={index}>{item.text}</li>
                ))}
              </>
            }
          />
        </ListItem>
      </List>
    </>
  )
}

MessageList.propTypes = {
  messages: PropTypes.array
}