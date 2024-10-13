package com.example.demo

import net.datafaker.Faker
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@SpringBootApplication
class NativeApplication

fun main(args: Array<String>) {
	runApplication<NativeApplication>(*args)
}

@RestController
class MyController {


	@GetMapping
	fun index(): String {
		return "Hello " + Faker().name().fullName()
	}
}