import DeleteIcon from '@mui/icons-material/Delete';

import { Container } from './StyleTrash';

export const Trash = ({movie, getMethod})=> {
 
  return (
    <Container >
      <DeleteIcon  onClick={() => getMethod(movie)}/>
    </Container>
  )
}