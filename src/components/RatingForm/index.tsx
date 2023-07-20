import React, { FormEvent, useState } from 'react'
import {
  ActionIcon,
  ActionsContainer,
  Container,
  UserDetails,
  FormContainer,
  TextArea,
} from './styles'
import { Avatar } from '../Avatar'
import { RatingStars } from '../RatingStars'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { useSession } from 'next-auth/react'

import { CgClose } from 'react-icons/cg'
import { AiOutlineCheck } from 'react-icons/ai'

type RatingFormProps = {
  onCancel: () => void
  bookId: string
}

export function RatingForm({ bookId, onCancel }: RatingFormProps) {
  const { data: session } = useSession()

  const user = session?.user

  const [description, setDescription] = useState('')
  const [currentRate, setCurrentRate] = useState(0)

  const queryClient = useQueryClient()

  const { mutateAsync: handleRate } = useMutation(
    async () => {
      await api.post(`/books/${bookId}/rate`, {
        description,
        rate: currentRate,
      })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['book', bookId])
        queryClient.invalidateQueries(['books'])
        onCancel()
      },
    },
  )

  const submitDisabled = !description.trim() || !currentRate

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (submitDisabled) return
    await handleRate()
  }

  const handleChangeRate = (newRate: number) => {
    setCurrentRate(newRate)
  }

  return (
    <Container>
      {user && (
        <UserDetails>
          <section>
            <Avatar alt={user.name} src={user.avatar_url} />
            <header>{user.name}</header>
          </section>

          <RatingStars rate={currentRate} changeRate={handleChangeRate} />
        </UserDetails>
      )}

      <FormContainer onSubmit={handleSubmit}>
        <TextArea
          placeholder="Escreva sua avaliação"
          maxLength={450}
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
        <ActionsContainer>
          <ActionIcon buttonType={'close'} type="button" onClick={onCancel}>
            <CgClose size={24} />
          </ActionIcon>
          <ActionIcon
            buttonType={'check'}
            type="submit"
            disabled={submitDisabled}
          >
            <AiOutlineCheck size={24} />
          </ActionIcon>
        </ActionsContainer>
      </FormContainer>
    </Container>
  )
}
