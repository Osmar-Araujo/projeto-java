package com.les.lesapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.les.lesapi.models.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
	

}
