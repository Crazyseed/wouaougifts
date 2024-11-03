// AddListModal.tsx
import { useState } from 'react';
import { 
  Modal, 
  Box, 
  Typography, 
  TextField, 
  Button,
  Stack 
} from '@mui/material';
import { db } from '../../Confs/firebase/FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

// Définition de l'interface des props
export interface AddListModalProps {
  open: boolean;
  onClose: () => void;
}

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

// Exportation directe du composant fonction
export default function AddListModal({ open, onClose }: AddListModalProps) {
  const [listData, setListData] = useState({
    title: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setListData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const listsRef = collection(db, 'lists');
      await addDoc(listsRef, {
        ...listData,
        createdAt: new Date().toISOString()
      });

      setListData({ title: '', description: '' });
      onClose();
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la liste:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-title" variant="h6" component="h2" mb={3}>
          Ajouter une nouvelle liste
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Titre"
              name="title"
              value={listData.title}
              onChange={handleChange}
              required
            />

            <TextField
              fullWidth
              label="Description"
              name="description"
              value={listData.description}
              onChange={handleChange}
              multiline
              rows={4}
            />

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
              <Button 
                onClick={onClose}
                disabled={isSubmitting}
              >
                Annuler
              </Button>
              <Button 
                type="submit"
                variant="contained"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi...' : 'Ajouter'}
              </Button>
            </Box>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}