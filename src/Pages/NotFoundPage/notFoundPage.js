import FormDecorator from '../../Components/FormDecorator/formDecorator';
import NotFoundPageContent from '../../Components/NotFoundPageContent/notFoundPageContent';

export default function NotFoundPage() {
  return (
    <section className="notFoundPage">
      <FormDecorator title="not found">
        <NotFoundPageContent />
      </FormDecorator>
    </section>
  );
}
