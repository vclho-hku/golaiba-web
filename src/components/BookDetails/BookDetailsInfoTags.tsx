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
        <div>
          <div>
            <div className={classes.tag}>企管財經</div>
          </div>
        </div>
        <div>
          <div>
            <div className={classes.tag}>個人財務</div>
          </div>
        </div>
        <div>
          <div>
            <div className={classes.tag}>財務</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsInfoTags;
