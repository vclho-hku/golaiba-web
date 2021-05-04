import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tag: {
      backgroundColor: '#E0DFE0',
      padding: '5px',
      margin: '5px',
      borderRadius: '5px',
    },
    tagsOuterContainer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '20px',
    },
    tagsContainer: {
      display: 'flex',
      alignContent: 'center',
      flexWrap: 'wrap',
    },
  }),
);

const BookDetailsInfoTags = (props: any) => {
  const classes = useStyles();
  return (
    <div className={classes.tagsOuterContainer}>
      <div>分類：</div>
      <div className={classes.tagsContainer}>
        {props.tags.map((tag) => {
          return (
            <div key={tag}>
              <div>
                <div className={classes.tag}>{tag}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookDetailsInfoTags;
