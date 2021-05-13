import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { NoBook } from '../Share';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: '10px',
      padding: '10px',
    },
    root: {
      width: 200,
      margin: '10px',
    },
    media: {
      height: '300px',
      backgroundSize: 'contain',
      paddingTop: '0%', // 16:9
      cursor: 'pointer',
    },
  }),
);

const VisitBookshelfContainer = (props: any) => {
  const classes = useStyles();
  const [bookshelf, setBookshelf] = useState(props.bookshelf);
  return (
    <div>
      {bookshelf.length == 0 && (
        <NoBook>
          <Typography variant="body1">還未有任何書本在書櫃</Typography>
        </NoBook>
      )}
      <div className={classes.container}>
        {bookshelf.map((bookshelf: any, index: any) => {
          return (
            <Card key={index} className={classes.root}>
              <Link href={`/book-details/${bookshelf.book.id}`}>
                <CardMedia
                  className={classes.media}
                  image={bookshelf.book.imageUrl.medium}
                  title={bookshelf.book.title}
                />
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
export default VisitBookshelfContainer;