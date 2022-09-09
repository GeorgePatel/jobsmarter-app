package jobservice.models.results;

import jobservice.models.JobApplicationModel;

public class GetJobApplicationResult {
    private JobApplicationModel jobApplicationModel;

    public GetJobApplicationResult(Builder builder) {
        this.jobApplicationModel = builder.jobApplicationModel;
    }

    public JobApplicationModel getJobApplicationModel() {
        return jobApplicationModel;
    }

    public void setJobApplicationModel(JobApplicationModel jobApplicationModel) {
        this.jobApplicationModel = jobApplicationModel;
    }

    public static Builder builder() { return new Builder(); }

    public static final class Builder {
        private JobApplicationModel jobApplicationModel;

        public Builder withJobApplication(JobApplicationModel jobApplicationModelToUse) {
            this.jobApplicationModel = jobApplicationModelToUse;
            return this;
        }

        public GetJobApplicationResult build() { return new GetJobApplicationResult(this); }
    }
}
