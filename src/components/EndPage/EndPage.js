import React, { useState } from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const rootStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: (theme) => theme.spacing(2),
  backgroundColor: (theme) => theme.palette.background.paper,
  maxWidth: "400px", // added maxWidth property
};

const listContainerStyles = {
  maxWidth: 560,
  backgroundColor: (theme) => theme.palette.background.paper,
  border: (theme) => `1px solid ${theme.palette.divider}`,
  borderRadius: (theme) => theme.shape.borderRadius,
  marginTop: (theme) => theme.spacing(2),
};

const styledListItemStyles = {
  '&:hover': {
    backgroundColor: (theme) => theme.palette.action.hover,
  },
};

const EndPage = ({ topics, onSelect, lessons }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    // onSelect(topic);
  };

  const getLessonText = () => {
    const lesson = lessons.find((lesson) => lesson.topic === selectedTopic);
    return lesson ? lesson.text : '';
  };

  return (
    <div sx={rootStyles} className="endPage">
      <Typography variant="h6" gutterBottom>Select a topic:</Typography>
      <List sx={listContainerStyles}>
        {topics.map((topic) => (
          <ListItem
            key={topic}
            button
            onClick={() => handleTopicSelect(topic)}
            sx={styledListItemStyles}
            selected={selectedTopic === topic}
          >
            <ListItemText primary={topic} />
          </ListItem>
        ))}
      </List>
      <Typography variant="subtitle2" gutterBottom sx={{ maxWidth: '450px' }}>
        Learn some more!: {getLessonText()}
      </Typography>
    </div>
  );
};

export default EndPage;
