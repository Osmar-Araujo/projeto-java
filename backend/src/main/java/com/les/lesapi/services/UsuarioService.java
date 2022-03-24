package com.les.lesapi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.les.lesapi.models.Usuario;
import com.les.lesapi.repositories.UsuarioRepository;

@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	public List<Usuario> findAll(){
		List<Usuario> list = usuarioRepository.findAll();
		return list;
	}
	
	public Usuario save (Usuario usuario) {
		return usuarioRepository.save(usuario);
	}
	
	

}
