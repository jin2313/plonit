package com.plonit.plonitservice.domain.crew.repository;

import com.plonit.plonitservice.domain.crew.Crew;
import com.plonit.plonitservice.domain.feed.Feed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CrewRepository extends JpaRepository<Crew, Long> {
    Optional<Crew> findById(Long id);
}