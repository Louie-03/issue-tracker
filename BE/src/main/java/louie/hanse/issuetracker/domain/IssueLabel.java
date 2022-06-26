package louie.hanse.issuetracker.domain;

import lombok.NoArgsConstructor;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;
import static javax.persistence.GenerationType.IDENTITY;

@Entity
@NoArgsConstructor
public class IssueLabel {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn
    private Issue issue;

    @ManyToOne(fetch = LAZY)
    @JoinColumn
    private Label label;

    public IssueLabel(Issue issue, Label label) {
        this.issue = issue;
        this.label = label;
    }
}
