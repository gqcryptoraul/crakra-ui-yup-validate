import { useForm } from "react-hook-form";

import React from "react";
import Head from "next/head";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  HStack,
  Avatar,
  Tag,
  Icon,
  Button
} from "@chakra-ui/react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function HookForm() {
  // const { id } = 1;
  //const isAddMode = !id;

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required")
    /*profile: Yup.string()
        .required('Perfil is required'),
    bussines_unity: Yup.string()
        .required('bussines required'),    
    password: Yup.string()
        .transform(x => x === '' ? undefined : x)
        .concat(isAddMode ? Yup.string().required('Password is required') : null)
        .min(8, 'Password must be at least 8 characters'),
    confirmPassword: Yup.string()
        .transform(x => x === '' ? undefined : x)
        .when('password', (password, schema) => {
            if (password || isAddMode) return schema.required('Confirm Password is required');
        })
        .oneOf([Yup.ref('password')], 'Passwords must match')*/
  });

  const { handleSubmit, register, formState, errors } = useForm({
    resolver: yupResolver(validationSchema)
  });

  function validateName(value) {
    if (!value) {
      return "Name is required1";
    } else return true;
  }

  function validateemail(value) {
    var texto = value;
    var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (!value) {
      return "email is required";
    } else if (!regex.test(texto)) {
      return "no es un email valido";
    } else return true;
  }

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Head>
        <title>Registro de Usuário - Administrador</title>
      </Head>
      <HStack spacing={3} p={3} bg="appBg" borderRadius={9} w="full">
        <Avatar size="xl" name="Raul Gonzalez" colorScheme="purple" />
        <Tag
          size="md"
          key="lg"
          fontSize="14px"
          fontStyle="Bold"
          variant="solid"
          colorScheme="green"
        >
          PENDENTE
        </Tag>
        <Icon as={BsFillInfoCircleFill} boxSize={4} color="#8E96A0" />
      </HStack>
      <HStack w="full" spacing={5} align="flex-start">
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="name">
            First name
            <Icon as={BsFillInfoCircleFill} boxSize={3} color="#8E96A0" />
          </FormLabel>
          <Input name="name" placeholder="name" {...register("name")} />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor="email">
            Email
            <Icon as={BsFillInfoCircleFill} boxSize={3} color="#8E96A0" />
          </FormLabel>
          <Input
            name="email"
            type="email"
            placeholder="E-mail do colaborador"
            {...register("email")}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
      </HStack>
      <Button
        mt={4}
        colorScheme="teal"
        isLoading={formState.isSubmitting}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}
