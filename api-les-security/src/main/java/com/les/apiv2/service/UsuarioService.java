package com.les.apiv2.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.les.apiv2.entities.Usuario;
import com.les.apiv2.repository.UsuarioRepository;

@Service
public class UsuarioService {
	
BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	public List<Usuario> findAll(){
		List<Usuario> list = usuarioRepository.findAll();
		return list;
	}
	
	public Usuario save (Usuario usuario) {
		usuario.setPassword(encoder.encode(usuario.getPassword()));
		return usuarioRepository.save(usuario);
	}

}
